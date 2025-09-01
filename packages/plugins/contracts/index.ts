import { AdminPlugin } from "./admin.contract"
import { ApiPlugin } from "./api.contract"
import { FrontPlugin } from "./front.contract"


export type Plugin = {
  front: FrontPlugin,
  admin: AdminPlugin,
  api: ApiPlugin,
}