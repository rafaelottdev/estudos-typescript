export function formatCompact(value?: number) {
    if (value === undefined || value === null) return "";

    const abs = Math.abs(value);

    if (abs >= 1_000_000_000_000) {
        return `$${(value / 1_000_000_000_000).toFixed(3)}T`;
    }

    if (abs >= 1_000_000_000) {
        return `$${(value / 1_000_000_000).toFixed(3)}B`;
    }

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
    }).format(value);
}
