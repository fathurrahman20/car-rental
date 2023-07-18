import { useState } from "react";
import { Container, Row } from "reactstrap";
import ListCard from "../components/ListCard";
import CardDetail from "../components/CardDetail";
import RentForm from "../components/RentForm";

export default function Search() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <RentForm
        isClick={isClick}
        setIsClick={setIsClick}
        setData={setData}
        setIsLoading={setIsLoading}
      />

      {isLoading ? (
        <h1>Loading...</h1>
      ) : !isClick ? (
        <section id="cardResult">
          <Container className="container">
            <Row className="row justify-content-center">
              {data.map((car) => {
                return (
                  <ListCard
                    key={car.id}
                    name={car.name}
                    image={car.image}
                    price={car.price}
                    id={car.id}
                    isClick={isClick}
                    setIsClick={setIsClick}
                    setDetailData={setDetailData}
                  />
                );
              })}
            </Row>
          </Container>
        </section>
      ) : (
        <CardDetail detailData={detailData} />
      )}
    </>
  );
}
