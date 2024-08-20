import React from 'react';

const Loader = () => {
    return (
        <div id="loading">
            <div
                style={{
                    bottom: 0,
                    left: 0,
                    overflow: "hidden",
                    position: "absolute",
                    right: 0,
                    top: 0
                }}
            >
                <div
                    style={{
                        animation:
                            "a-h .5s 1.25s 1 linear forwards,a-nt .6s 1.25s 1 cubic-bezier(0,0,.2,1)",
                        background: "#eee",
                        borderRadius: "50%",
                        height: 800,
                        left: "50%",
                        margin: "-448px -400px 0",
                        position: "absolute",
                        top: "50%",
                        transform: "scale(0)",
                        width: 800
                    }}
                />
            </div>
            <div style={{ height: "100%", textAlign: "center" }}>
                <div style={{ height: "50%", margin: "0 0 -140px" }} />
                <div
                    style={{
                        height: 128,
                        margin: "0 auto",
                        position: "relative",
                        width: 176
                    }}
                >
                    <div
                        style={{
                            animation:
                                "a-s .5s .5s 1 linear forwards,a-e 1.75s .5s 1 cubic-bezier(0,0,.67,1) forwards",
                            opacity: 0,
                            transform: "scale(.68)"
                        }}
                    >
                        <div
                            style={{
                                background: "#ddd",
                                borderRadius: 12,
                                boxShadow: "0 15px 15px -15px rgba(0,0,0,.3)",
                                height: 128,
                                left: 0,
                                overflow: "hidden",
                                position: "absolute",
                                top: 0,
                                transform: "scale(1)",
                                width: 176
                            }}
                        >
                            <div
                                style={{
                                    animation: "a-nt .667s 1.5s 1 cubic-bezier(.4,0,.2,1) forwards",
                                    background: "#d23f31",
                                    borderRadius: "50%",
                                    height: 270,
                                    left: 88,
                                    margin: "-135px",
                                    position: "absolute",
                                    top: 25,
                                    transform: "scale(.5)",
                                    width: 270
                                }}
                            />
                            <div
                                style={{
                                    height: 128,
                                    left: 20,
                                    overflow: "hidden",
                                    position: "absolute",
                                    top: 0,
                                    transform: "scale(1)",
                                    width: 136
                                }}
                            >
                                <div
                                    style={{
                                        background: "#e1e1e1",
                                        height: 128,
                                        left: 0,
                                        position: "absolute",
                                        top: 0,
                                        width: 68
                                    }}
                                >
                                    <div
                                        style={{
                                            animation: "a-h .25s 1.25s 1 forwards",
                                            background: "#eee",
                                            height: 128,
                                            left: 0,
                                            opacity: 1,
                                            position: "absolute",
                                            top: 0,
                                            width: 68
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        background: "#eee",
                                        height: 100,
                                        left: 1,
                                        position: "absolute",
                                        top: 56,
                                        transform: "scaleY(.73)rotate(135deg)",
                                        width: 200
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    background: "#bbb",
                                    height: 176,
                                    left: 0,
                                    position: "absolute",
                                    top: "-100px",
                                    transform: "scaleY(.73)rotate(135deg)",
                                    width: 176
                                }}
                            >
                                <div
                                    style={{
                                        background: "#eee",
                                        borderRadius: "12px 12px 0 0",
                                        bottom: 117,
                                        height: 12,
                                        left: 55,
                                        position: "absolute",
                                        transform: "rotate(-135deg)scaleY(1.37)",
                                        width: 136
                                    }}
                                />
                                <div
                                    style={{
                                        background: "#eee",
                                        height: 96,
                                        position: "absolute",
                                        right: 0,
                                        top: 0,
                                        width: 96
                                    }}
                                />
                                <div
                                    style={{
                                        boxShadow: "inset 0 0 10px #888",
                                        height: 155,
                                        position: "absolute",
                                        right: 0,
                                        top: 0,
                                        width: 155
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    animation:
                                        "a-s .167s 1.283s 1 linear forwards,a-es 1.184s 1.283s 1 cubic-bezier(.4,0,.2,1) forwards",
                                    background:
                                        "linear-gradient(0,rgba(38,38,38,0),rgba(38,38,38,.2))",
                                    height: 225,
                                    left: 0,
                                    opacity: 0,
                                    position: "absolute",
                                    top: 0,
                                    transform: "rotate(-43deg)",
                                    transformOrigin: "0 13px",
                                    width: 176
                                }}
                            />
                        </div>
                        <div
                            style={{
                                animation: "a-ef 1.184s 1.283s 1 cubic-bezier(.4,0,.2,1) forwards",
                                borderRadius: 12,
                                height: 100,
                                left: 0,
                                overflow: "hidden",
                                position: "absolute",
                                top: 0,
                                transform: "scaleY(1)",
                                transformOrigin: "top",
                                width: 176
                            }}
                        >
                            <div
                                style={{
                                    height: 176,
                                    left: 0,
                                    position: "absolute",
                                    top: "-100px",
                                    transform: "scaleY(.73)rotate(135deg)",
                                    width: 176
                                }}
                            >
                                <div
                                    style={{
                                        animation: "a-s .167s 1.283s 1 linear forwards",
                                        boxShadow: "-5px 0 12px rgba(0,0,0,.5)",
                                        height: 176,
                                        left: 0,
                                        opacity: 0,
                                        position: "absolute",
                                        top: 0,
                                        width: 176
                                    }}
                                />
                                <div
                                    style={{
                                        background: "#ddd",
                                        height: 176,
                                        left: 0,
                                        overflow: "hidden",
                                        position: "absolute",
                                        top: 0,
                                        width: 176
                                    }}
                                >
                                    <div
                                        style={{
                                            animation:
                                                "a-nt .667s 1.25s 1 cubic-bezier(.4,0,.2,1) forwards",
                                            background: "#db4437",
                                            borderRadius: "50%",
                                            bottom: 41,
                                            height: 225,
                                            left: 41,
                                            position: "absolute",
                                            transform: "scale(0)",
                                            width: 225
                                        }}
                                    />
                                    <div
                                        style={{
                                            background: "#f1f1f1",
                                            height: 128,
                                            left: 24,
                                            position: "absolute",
                                            top: 24,
                                            transform: "rotate(90deg)",
                                            width: 128
                                        }}
                                    />
                                    <div
                                        style={{
                                            animation:
                                                "a-efs 1.184s 1.283s 1 cubic-bezier(.4,0,.2,1) forwards",
                                            background: "#fff",
                                            height: 176,
                                            opacity: 0,
                                            transform: "rotate(90deg)",
                                            width: 176
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="nlpt" />
                <div
                    style={{ animation: "a-s .25s 1.25s 1 forwards", opacity: 0 }}
                    className="msg"
                >
                    <p>Google</p>
                    <p>Workspace</p>
                </div>
            </div>
        </div>
    );
}

export default Loader;
