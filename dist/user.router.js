"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.use(express_1.default.json());
// ------------------------------GET
userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.redirect("/app.html");
}));
// ------------------------------GET
//Afficher le message du nom : http://localhost:8080/printUser/yoann
userRouter.get("/printUser/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userName = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.name;
    let response = `Bonjour ${userName} vous êtes bien matinal.`;
    res.send({ "responseToPrint": response });
}));
//# sourceMappingURL=user.router.js.map