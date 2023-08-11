AFRAME.registerComponent("wire-fence", {
    init: function () {
        var posX = -20
        var posZ = 85
        var posY = 2.5
        for (var i = 0; i < 5; i++) {
            var wire1 = document.createElement("a-entity")
            var wire2 = document.createElement("a-entity")
            var wire3 = document.createElement("a-entity")
            var wire4 = document.createElement("a-entity")
            posX += 5
            posZ -= 10
            var scale = { x: 2, y: 2, z: 2 }
            wire1.setAttribute("id", "wire1" + i)
            wire1.setAttribute("position", { x: posX, y: posY, z: -35 })
            wire1.setAttribute("scale", scale)
            wire1.setAttribute("gltf-model", "./models/barbed_wire_fence/scene.gltf")
            wire1.setAttribute("static-body", {})

            wire2.setAttribute("id", "wire2" + i)
            wire2.setAttribute("position", { x: posX, y: posY, z: 85 })
            wire2.setAttribute("scale", scale)
            wire2.setAttribute("gltf-model", "./models/barbed_wire_fence/scene.gltf")
            wire2.setAttribute("static-body", {})

            wire3.setAttribute("id", "wire3" + i)
            wire3.setAttribute("position", { x: -30, y: posY, z: posZ })
            wire3.setAttribute("scale", scale)
            wire3.setAttribute("gltf-model", "./models/barbed_wire_fence/scene.gltf")
            wire3.setAttribute("static-body", {})
            wire3.setAttribute("rotation", { x: 0, y: 90, z: 0 })

            wire4.setAttribute("id", "wire4" + i)
            wire4.setAttribute("position", { x: 50, y: posY, z: posZ })
            wire4.setAttribute("scale", scale)
            wire4.setAttribute("gltf-model", "./models/barbed_wire_fence/scene.gltf")
            wire4.setAttribute("static-body", {})
            wire4.setAttribute("rotation", { x: 0, y: 90, z: 0 })

            var sceneEl = document.querySelector("#scene")
            sceneEl.appendChild(wire1)
            sceneEl.appendChild(wire2)
            sceneEl.appendChild(wire3)
            sceneEl.appendChild(wire4)
        }
    }
})
AFRAME.registerComponent("boxes", {
    schema: {
        height: { type: "number", default: 3 },
        width: { type: "number", default: 3 },
        depth: { type: "number", default: 3 },
    },
    init: function () {
        for (var i = 0; i < 10; i++) {
            var box = document.createElement("a-entity");
            box.setAttribute("id", "box" + i);

            posX = Math.random() * 200 - 100;
            posY = 1.5;
            posZ = Math.random() * 200 - 100;

            position = { x: posX, y: posY, z: posZ };
            box.setAttribute("position", position);

            box.setAttribute("geometry", {
                primitive: "box",
                height: this.data.height,
                width: this.data.width,
                depth: this.data.depth,
            });

            box.setAttribute("material", {
                src: "./images/boxtexture1.jpg",
                repeat: "1 1 1",
            });

            box.setAttribute("dynamic-body", {});
            var sceneEl = document.querySelector("#scene");
            sceneEl.appendChild(box);
        }
    },
});