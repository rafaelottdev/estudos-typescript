import { useEffect, useState } from "react"
import { API_KEY, BASE_URL } from "../../config/coingecko"

import styles from "./GlobalData.module.css"

interface GlobalInfo {
    active_cryptocurrencies: number,
    ongoing_icos: number,
    ended_icos: number,
    markets: number,
    total_market_cap: {
        usd: number
    }
    total_volume: {
        usd: number,
    }
    market_cap_percentage: {
      btc: number,
      eth: number
    },
    market_cap_change_percentage_24h_usd: number,
    volume_change_percentage_24h_usd: number,
    updated_at: number
}

function GlobalData() {
    const [globalInfo, setGlobalInfo] = useState<GlobalInfo | null>(null)

    async function getGlobal(): Promise<GlobalInfo> {
        const response = await fetch(`${BASE_URL}global`, {
            headers: {
                "x-cg-demo-api-key": API_KEY
            }
        })
        const json = await response.json()

        return json.data
    }

    useEffect(() => {
        async function fetchData() {
            const global = await getGlobal()
            setGlobalInfo(global)
        }

        fetchData()
    }, [])

    function formatCompact(value?: number) {
        if(!value) return ""

        const abs = Math.abs(value)

        if(abs >= 1_000_000_000_000) {
            return `$${(value / 1_000_000_000_000).toFixed(3)}T`
        }

        if(abs >= 1_000_000_000) {
            return `$${(value / 1_000_000_000).toFixed(3)}B`
        }
    }

    function formatPorcentage(value?: number) {
        if (value === undefined) return ""
        return `${value.toFixed(2)}%`
    }

    return (
    <section className={styles.globalInfo_Section}>
        <ul className={styles.globalInfo_list}>
            <li className={styles.globalInfo_item}>
                <p>Coins:</p>

                <div className={styles.globalInfo_item_wrapp}>{globalInfo?.active_cryptocurrencies}</div>
            </li>

            <li className={styles.globalInfo_item}>
                <p>Exchanges:</p>

                <div className={styles.globalInfo_item_wrapp}>{globalInfo?.markets}</div>
            </li>

            <li className={styles.globalInfo_item}>
                <p>Market Caps:</p>

                <ul className={styles.globalInfo_item_list}>
                    <li>
                        {formatCompact(globalInfo?.total_market_cap?.usd)}
                    </li>

                    <li className={
                        (globalInfo?.market_cap_change_percentage_24h_usd?? 0) >= 0 ? `${styles.positive_porcentage}` : `${styles.negative_porcentage}`
                    }>
                        {formatPorcentage(globalInfo?.market_cap_change_percentage_24h_usd)}
                    </li>
                </ul>
            </li>

            <li className={styles.globalInfo_item}>
                <p>24h Vol:</p>

                <div className={styles.globalInfo_item_wrapp}>
                    {formatCompact(globalInfo?.total_volume?.usd)}
                </div>
            </li>

            <li className={styles.globalInfo_item}>
                <p>Dominance:</p>

                <ul className={styles.globalInfo_item_list}>
                    <li>
                        {formatPorcentage(globalInfo?.market_cap_percentage?.btc)}
                    </li>

                    <li>
                        {formatPorcentage(globalInfo?.market_cap_percentage?.eth)}
                    </li>
                </ul>
            </li>
        </ul>
    </section>
  )
}

export default GlobalData
