import { useEffect, useState } from "react"
import { API_KEY, BASE_URL } from "../../config/coingecko"

import { formatPorcentage } from "../../config/porcentageFormat"

import { AiFillFire } from "react-icons/ai"

import styles from "./Trending.module.css"

interface Coin {
    item: {
        name: string,
        small: string,
        data: {
            price: number,
            price_change_percentage_24h: {
                usd: number
            }
        }
    }
}

interface TrendingData {
    coins: Coin[]
}

function Trending() {
    const [trending, setTrending] = useState<TrendingData | null>(null)

    async function getTrending(): Promise<TrendingData> {
        const response = await fetch(`${BASE_URL}search/trending`, {
            headers: {
                "x-cg-demo-api-key": API_KEY
            }
        })
        const json = await response.json()

        return json
    }

    useEffect(() => {
        async function fetchData() {
            const trendingData = await getTrending()
            setTrending(trendingData)
        }

        fetchData()
    }, [])

    function formatCompact(value?: number) {
        if (value === undefined || value === null) return "";

        const abs = Math.abs(value);

        if (abs >= 1_000_000_000_000) {
            return `$${(value / 1_000_000_000_000).toFixed(3)}T`;
        }

        if (abs >= 1_000_000_000) {
            return `$${(value / 1_000_000_000).toFixed(3)}B`;
        }

        return `$${value.toFixed(5)}`;
    }

    return (
        <section className={styles.trending_section}>
            <div className={styles.trending_header}>
                <AiFillFire />
                <h2>Trending</h2>
            </div>

            <ul className={styles.trending_list}>
                {
                    trending?.coins.map((obj, i) => {
                        if(i <= 2) {
                            return (
                                <li key={i} className={styles.trending_item}>
                                    <div className={styles.img_name}>
                                        <img src={obj.item.small} alt="coin image" />

                                        <p>{obj.item.name}</p>
                                    </div>

                                    <div className={styles.price_porcentage}>
                                        <p>{formatCompact(obj.item.data.price)}</p>

                                        <p className={
                                            (obj.item.data.price_change_percentage_24h.usd?? 0) >= 0 ? `${styles.positive_porcentage}` : `${styles.negative_porcentage}`
                                        }>
                                            {formatPorcentage(obj.item.data.price_change_percentage_24h.usd)}
                                        </p>
                                    </div>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </section>
    )
}

export default Trending
