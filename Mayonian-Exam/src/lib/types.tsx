export type status = "loading" | "idle";

export type ButtonLabels = 
| "SEARCH"
| "START"
| "NEW"
| "SLOTS"
| "LIVE"
| "JACKPOTS"
| "SPORTS"
| "FAVORITES"
| "INVITE"
| "CASINO LIVE"
| "CASHIER";

export type ButtonIconsTypes = {
    [key: string]: (color?: string, className?: string) => JSX.Element;
}