import slib, { argv } from "@randajan/simple-lib";

const { isBuild} = argv;

slib(
    isBuild,
    {
        port: 4001,
        mode: "node",
        lib: {

        },
        demo:{

        }
})