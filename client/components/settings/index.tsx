import { RouteSettings, globalState } from "../../state"
import { Link } from "../common/link"
import { Sessions } from "./sessions"
import { Sources } from "./sources"

export function SettingsTab({ route }: { route: RouteSettings }) {
    if (route.tab === "sessions") {
        return <Sessions />
    } else if (route.tab === "sources") {
        return <Sources />
    } else {
        return <Sources />
    }
}

export function Index({ route }: { route: RouteSettings }) {
    return <div>
        <h1>Settings</h1>
        <div>
            <div>
                <Link href="/settings/sources">Sources</Link>
                <Link href="/settings/sessions">Sessions</Link>
            </div>
            <SettingsTab route={route} />
        </div>
    </div>
}
