import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";

async function up() {

    await prisma.user.createMany({
        data: [
            {
                fullName: "User Test",
                email: "user@test.test",
                password: hashSync("111111", 10),
                verified: new Date(),
                role: "USER",

            },
            {
                fullName: "Admin Test",
                email: "admin@test.test",
                password: hashSync("111111", 10),
                verified: new Date(),
                role: "ADMIN",
            },
        ],
    });

}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
} 

main().then(async() => {
    await prisma.$disconnect();
    process.exit(0);
}).catch(async(e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});