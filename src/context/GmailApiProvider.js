import React, { createContext, useState, useEffect, useContext } from "react";

// Context to provide the Gmail API instance
const GmailApiContext = createContext(null);

export const useGmailApi = () => useContext(GmailApiContext);

export const GmailApiProvider = ({ children }) => {
  const [gapiLoaded, setGapiLoaded] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [inboxMessages, setInboxMessages] = useState([]);

  useEffect(() => {
    // Load the Google API script
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.onload = () => {
        window.gapi.load("client:auth2", initializeGmailApi);
      };
      document.body.appendChild(script);
    };

    // Initialize the Gmail API
    const initializeGmailApi = () => {
      window.gapi.client
        .init({
          apiKey: "AIzaSyAOKvw3Bh_mf4mgRJ2JyQLNZSVidmogk9o", // Use your API_KEY
          clientId:
            "209177226023-dv7fd0gg4cl14ql4i75l6jh084r919a2.apps.googleusercontent.com", // Use your CLIENT_ID
          redirectUri: "http://localhost:3000/inbox", // Add this line
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
          ],
          scope: "https://www.googleapis.com/auth/gmail.readonly", // Permissions
          plugin_name: "App Name that you used in google developer console API", // OAuth2 bypass
        })
        .then(() => {
          const authInstance = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(authInstance.isSignedIn.get());
          setGapiLoaded(true);
          authInstance.isSignedIn.listen(setIsSignedIn);
          console.log("Successfully initialized Gmail API");
        })
        .catch((error) => {
          console.error("Error initializing Gmail API", error);
        });
    };

    loadScript();
  }, []);

  const signInGoogle = () => {
    const authInstance = window.gapi.auth2.getAuthInstance();
    authInstance.signIn();
  };

  const signOutGoogle = () => {
    const authInstance = window.gapi.auth2.getAuthInstance();
    authInstance.signOut();
  };

  const fetchInboxMessages = async () => {
    try {
      const response = await window.gapi.client.gmail.users.messages.list({
        'labelIds': ['INBOX'],
        'userId': 'me',
      });
      const messages = response.result.messages;
      const inboxMessages = messages.map((message) => {
        const payload = message.payload;
        let emailBody = '';
        if (payload.parts) {
          payload.parts.forEach((part) => {
            if (part.mimeType === 'text/plain' || part.mimeType === 'text/html') {
              emailBody = part.body.text;
            }
          });
        }
        return {
          historyId: message.historyId,
          id: message.id,
          internalDate: message.internalDate,
          labelIds: message.labelIds,
          payload: emailBody,
          sizeEstimate: message.sizeEstimate,
          snippet: message.snippet,
        };
      });
      setInboxMessages(inboxMessages);
      console.log("Fetching Data", inboxMessages)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GmailApiContext.Provider
      value={{
        gapi: gapiLoaded ? window.gapi : null,
        isSignedIn,
        signInGoogle,
        signOutGoogle,
        fetchInboxMessages,
        inboxMessages,
      }}
    >
      {children}
    </GmailApiContext.Provider>
  );
};
