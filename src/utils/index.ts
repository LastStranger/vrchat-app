export function getRank(prefixRank: string) {
    switch (prefixRank) {
        case "system_trust_veteran":
            return "Trusted";
        case "system_trust_trusted":
            return "Known";
        case "system_trust_known":
            return "User";
        case "system_trust_basic":
            return "New";
        default:
            return "Visitor";
    }
}

export function getLanguage(prefixLanguage: string) {
    switch (prefixLanguage) {
        case "language_eng":
            return "English";
        case "language_zho":
            return "中文";
        case "language_jpn":
            return "日本語";
        default:
            return "未知";
    }
}
