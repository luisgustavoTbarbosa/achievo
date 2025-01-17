import { Card } from "./styles";

export function FilterCard ({ icon, cardTitle, cardStatus }) {
  return (
    <Card>
      <div>
        {icon}
        <p>{cardTitle}</p>
      </div>
      <p className="count">9</p>
    </Card>
  )
}
