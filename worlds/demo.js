// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite",
        "madhatter",
        "marchhare",
        "queenofhearts",
        "cheshirecat",
        "alice",
    ];

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "demo.js",
        "lights.js",
        "bouncingBall.js",
        "bitcoinTracker.js",
        "spin.js",
        "openPortal.js",
        "urlLink.js",
        "cradle.js",
    ];

    const frameColor = 0x888888;
    Constants.UseRapier = true;

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                // same position and orientation as in openPortal.js
                translation: [-12, -0.4, -10.2],
                rotation: [0, -Math.PI / 2, 0],
                spawn: "default",
            },
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                fileName: "/shanghai_riverside_2k.exr",
                dataLocation: "./assets/sky/shanghai_riverside_2k.exr",
                dataType: "exr",
            },
        },
        {
            card: {
                name: "world model",
                type: "3d",
                fileName: "/artgallery_042122.glb.zip",
                dataLocation: "./assets/3D/cyber.zip",
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                translation: [1, -1.7, 0],
                dataScale: [1, 1, 1],

                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            },
        },
    ];
}
