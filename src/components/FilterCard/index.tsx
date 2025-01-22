import { Card } from "./styles";

interface FilterCardProps {
  icon: React.ReactNode
  cardTitle: string
  cardVariant?: "primary" | "canceled" | "paused" | "all" | undefined
}

export function FilterCard ({ icon, cardTitle, cardVariant = "primary" }: FilterCardProps) {
  const colorVariants = {
    primary: "#92929D",
    canceled: "#F75A68",
    paused: "#FFB74D",
    all: "#42A5F5"
  }

  return (
    <Card $variant={colorVariants[cardVariant]}>
      <div>
        {icon}
        <p>{cardTitle}</p>
      </div>
      <p className="count">9</p>
    </Card>
  )
}
