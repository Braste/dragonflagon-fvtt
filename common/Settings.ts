export default class SETTINGS {
	static MOD_NAME: string;
	static init(moduleName: string) {
		this.MOD_NAME = moduleName;
	}
	static register<T>(key: string, config: ClientSettings.PartialSetting<T>) { game.settings.register(SETTINGS.MOD_NAME, key, config); }
	static registerMenu(key: string, config: ClientSettings.PartialMenuSetting) { game.settings.registerMenu(SETTINGS.MOD_NAME, key, config); }
	static get<T>(key: string): T { return <T>game.settings.get(SETTINGS.MOD_NAME, key); }
	static async set<T>(key: string, value: T): Promise<T> { return await game.settings.set(SETTINGS.MOD_NAME, key, value); }
	static default<T>(key: string): T { return <T>game.settings.settings.get(SETTINGS.MOD_NAME + '.' + key).default; }
	/** helper for referencing a Typed constructor for the `type` field of a setting { type: SETTINGS.typeOf<MyClass>() } */
	static typeOf<T>(): ConstructorOf<T> { return Object as any; }
}