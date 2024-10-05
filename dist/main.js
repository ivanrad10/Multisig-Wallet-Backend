"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const multisig_module_1 = require("./multisig/multisig.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(multisig_module_1.MultisigModule);
    app.enableCors({
        origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map