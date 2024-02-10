export function getRank(prefixRank: string) {
    switch (prefixRank) {
        case "system_trust_veteran":
            return "Trusted";
        case "system_trust_trusted":
            return "Known";
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

export function getRankColorByTags(tags: string[] = []) {
    const prefixRank = tags.findLast(each => each.indexOf("system_trust_") !== -1);
    switch (prefixRank) {
        case "system_trust_veteran":
            return "#8143e6";
        case "system_trust_trusted":
            return "#ff7b42";
        case "system_trust_known":
            return "User";
        case "system_trust_basic":
            return "New";
        default:
            return "#cccccc";
    }
}

export function getRankColorByRank(rank: string): string {
    switch (rank) {
        case "Trusted":
            return "text-trusted";
        case "Known":
            return "#ff7b42";
        // case "system_trust_known":
        //     return "User";
        // case "system_trust_basic":
        //     return "New";
        default:
            return "#cccccc";
    }
}

export function getRankNameByTags(tags: string[]) {
    const prefixRank = tags?.findLast(each => each.indexOf("system_trust_") !== -1);
    return getRank(prefixRank);
}

export function getLanguage(prefixLanguage: string) {
    switch (prefixLanguage) {
        case "language_eng":
            return "English";
        case "language_zho":
            return "中文";
        case "language_jpn":
            return "日本語";
        case "language_por":
            return "葡萄牙语";
        default:
            return "未知";
    }
}

export const getWorldKey = (worldKey: string) => {
    if (worldKey === "offline" || worldKey === "traveling") {
        return "";
    }
    if (worldKey === "private") {
        // return worldKey;
        return "";
    }
    return worldKey.split(":")[0];
};

export const statusColor = (status: string) => {
    switch (status) {
        case "ask me":
            return "bg-askMe";
        case "active":
            return "bg-online";
        case "join me":
            return "bg-joinMe";
        default:
            return "";
    }
};
