/**
 * ビルドテスト(インターフェースを満たすことを確認する)
 */

import * as AMFlow from "@akashic/amflow";
import * as playlog from "@akashic/playlog";
import * as g from "@akashic/akashic-engine";
import * as pdi from "../src";

class MockLooper implements pdi.Looper {
	_running: boolean;
	_fun: (deltaTime: number) => number;

	constructor(fun: (deltaTime: number) => number) {
		this._running = false;
		this._fun = fun;
	}

	start(): void {
		this._running = true;
	}

	stop(): void {
		this._running = false;
	}

	step(deltaTime: number): number {
		if (!this._running)
			return;
		return this._fun(deltaTime);
	}
}

class AbstractAMFlowClient implements AMFlow.AMFlow {
	constructor(url: string) {
	}
	open(playId: string, callback?: (error?: Error) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#open");
	}
	close(callback?: (error?: Error) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#close");
	}
	authenticate(token: string, callback: (error: Error, permission: any) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#authenticate");
	}
	sendTick(tick: playlog.Tick): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#sendTick");
	}
	onTick(handler: (tick: playlog.Tick) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#onTick");
	}
	offTick(handler: (event: playlog.Tick) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#offTick");
	}
	sendEvent(event: playlog.Event): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#sendEvent");
	}
	onEvent(handler: (event: playlog.Event) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#onEvent");
	}
	offEvent(handler: (event: playlog.Event) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#offEvent");
	}
	getTickList(from: number, to: number, callback: (error: Error, ticks: playlog.TickList) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#getTickList");
	}
	putStartPoint(startPoint: AMFlow.StartPoint, callback: (error: Error) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#putStartPoint");
	}
	getStartPoint(opts: {frame: number}, callback: (error: Error, startPoint: AMFlow.StartPoint) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#getStartPoint");
	}
	putStorageData(key: playlog.StorageKey, value: playlog.StorageValue, options: any, callback: (err: Error) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#putStorageData");
	}
	getStorageData(keys: playlog.StorageReadKey[], callback: (error: Error, values: playlog.StorageData[]) => void): void {
		throw g.ExceptionFactory.createPureVirtualError("AbstractAMFlowClient#getStorageData");
	}
}

// この箇所の型定義がビルドエラーを起こさないことがポイント
class AbstractPlatform implements pdi.Platform {
	amflow: AMFlow.AMFlow;
	_resourceFactory: g.ResourceFactory;
	_handler: pdi.PlatformEventHandler;
	_renderReq: pdi.RendererRequirement;

	constructor() {
		this.amflow = new AbstractAMFlowClient("dummy");
		this._resourceFactory = new g.ResourceFactory();
		this._handler = null;
		this._renderReq = null;
	}

	setPlatformEventHandler(handler: pdi.PlatformEventHandler): void {
		this._handler = handler;
	}

	loadGameConfiguration (url: string, callback: (err: any, configuration: any) => void): void {
		callback(null, '{ "asset": { "mainScene": { "type": "script", "global": true, "path": "script/mainScene.js" } } }');
	}

	setRendererRequirement(requirement?: pdi.RendererRequirement): void {
		this._renderReq = requirement;
	}

	getPrimarySurface(): g.Surface {
		return this._resourceFactory.createSurface(this._renderReq.primarySurfaceWidth, this._renderReq.primarySurfaceHeight);
	}

	getResourceFactory(): g.ResourceFactory {
		return this._resourceFactory;
	}

	getOperationPluginViewInfo(): g.OperationPluginViewInfo {
		return {
			type: "original-invalid-view",
			view: null
		};
	}

	createLooper(fun: (deltaTime: number) => number): pdi.Looper {
		return new MockLooper(fun);
	}

	sendToExternal(playId: string, data: any): void {
		throw g.ExceptionFactory.createPureVirtualError("abstractPlatform.sendToExternal");
	}
}

