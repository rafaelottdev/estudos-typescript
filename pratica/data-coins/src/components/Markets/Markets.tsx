import { useEffect, useState } from "react"
import { API_KEY, BASE_URL } from "../../config/coingecko"

import { formatCompact } from "../../config/moneyFormat"
import { formatPorcentage } from "../../config/porcentageFormat"

import styles from "./Markets.module.css"

interface Market {
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    total_volume: number,
    price_change_percentage_24h: number,
    market_cap_change_percentage_24h: number
}

function Markets() {
    const [markets, setMarkets] = useState<Market[] | null>(null)
    
    async function getMarkets(): Promise<Market[]> {
        const response = await fetch(`${BASE_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&price_change_percentage=24h`, {
            headers: {
                "x-cg-demo-api-key": API_KEY
            }
        })
        const json = await response.json()

        return json
    }

    useEffect(() => {
        async function fetchData() {
            const marketsData = await getMarkets()
            setMarkets(marketsData)
        }

        fetchData()
    }, [])

    return (
        <section className={styles.markets_section}>
            <div>
                <div className={styles.coin_header}>
                    <div className={styles.coin_name}>
                        <p>#</p>
                        <p>Coin</p>
                    </div>

                    <div className={styles.coin_numbers_info}>
                        <p>Price</p>
                        <p>24h</p>
                        <p>Market Cap</p>
                        <p>24h</p>
                        <p>Total Volume</p>
                    </div>
                </div>

                <ul className={styles.coin_info_list}>
                    {markets?.map((obj, i) => {
                        return (
                            <li key={i} className={styles.coin_item}>
                                <div className={styles.coin_info_left}>
                                    <p>{obj.market_cap_rank}</p>

                                    <div className={styles.coin_info_name}>
                                        <img src={obj.image} alt="coin image" />
                                        <p>{obj.name}</p>
                                    </div>
                                </div>
                
                                <div className={styles.coin_info_right}>
                                    <p>{formatCompact(obj.current_price)}</p>

                                    <p className={
                                        (obj.price_change_percentage_24h?? 0) >= 0 ? `${styles.positive_porcentage}` : `${styles.negative_porcentage}`
                                    }>
                                        {formatPorcentage(obj.price_change_percentage_24h)}
                                    </p>

                                    <p>{formatCompact(obj.market_cap)}</p>

                                    <p className={
                                        (obj.market_cap_change_percentage_24h?? 0) >= 0 ? `${styles.positive_porcentage}` : `${styles.negative_porcentage}`
                                    }>
                                        {formatPorcentage(obj.market_cap_change_percentage_24h)}
                                    </p>
                                    
                                    <p>{formatCompact(obj.total_volume)}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Markets
