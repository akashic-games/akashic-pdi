import { CommonArea } from "../commons";

/**
 * SurfaceAtlasの空き領域管理インタフェース。
 *
 * 本クラスのインスタンスをゲーム開発者が直接生成することはなく、ゲーム開発者が利用する必要もない。
 */
export interface SurfaceAtlasSlot extends CommonArea {
	prev: SurfaceAtlasSlot | null;
	next: SurfaceAtlasSlot | null;
}
