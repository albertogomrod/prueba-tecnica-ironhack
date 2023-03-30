import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllPhonesService } from "../services/phone.services";
import { SpinnerDotted } from "spinners-react";

function PhoneList() {
  const navigate = useNavigate();

  const [allPhones, setAllPhones] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsFetching(true);
    try {
      const response = await getAllPhonesService();
      setTimeout(() => {
        setAllPhones(response.data);
        setIsFetching(false);
      }, 3000);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return (
      <div>
        <br id="brSpinner" />
        <SpinnerDotted size={50} thickness={179} speed={75} color="#FFFFFF" />
      </div>
    );
  }

  return (
    <div>
    <h1 id="titulo">The Phone Cave</h1>
      <h3 >Todos nuestros teléfonos móviles</h3>

      {allPhones.map((cadaMovil) => {
        return (
            <div key={cadaMovil._id}>
              <Link className="linkMovil" to={`/phones/${cadaMovil._id}`}>
                {cadaMovil.name}
              </Link>
              <p>Precio: {cadaMovil.price} eur.</p>
              <button className="buttonHome">Más detalles</button>
              <hr />
            </div>
        );
      })}
    </div>
  );
}

export default PhoneList;
