export function getRank(prefixRank: string) {
    switch (prefixRank) {
        case "system_trust_veteran":
            return "trusted";
        case "system_trust_trusted":
            return "known";
        case "system_trust_known":
            return "user";
        case "system_trust_basic":
            return "new";
        default:
            return "visitor";
    }
}

export function getRankColor(rank: string) {
    switch (rank) {
        case "trusted":
            return "text-trusted";
        case "known":
            return "#ff7b42";
        case "system_trust_known":
            return "User";
        case "system_trust_basic":
            return "New";
        default:
            return "#cccccc";
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
