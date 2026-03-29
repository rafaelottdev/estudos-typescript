export function formatPorcentage(value?: number) {
    if (typeof value !== "number") return "N/A"

    if (value > 9999) return "+9999%"
    if (value < -9999) return "-9999%"

    return `${value.toFixed(2)}%`
}
