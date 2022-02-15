import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputComponent from "../../../components/InputComponent";
import ButtonUpdateGroupComponent from "../../../components/ButtonGroupComponent";
import ButtonCreateGroupComponent from "../../../components/ButtonCreateGroupComponent";
import { useSelector } from "react-redux";
import { bloodStockActions } from "../../../store/blood/stocks";
import useHttp from "../../../hooks/useHttp";

const SpecificStock = () => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [neededAmount, setNeededAmount] = useState("");

  const { id } = useParams();
  const { mountNumber,  stocks } = useSelector((state) => state.bloodStock);

  const getRequest = useHttp({
    url: `/blood-bank/get-one-stock/${id}`,
    method: "get",
  });

  useEffect(() => {
    const getData = async () => {
      if (mountNumber === 0) {
        const res = await getRequest();
        if (!res.error) {
          const { type, amount, neededAmount } = res.data["data"];
          setType(type);
          setAmount(amount);
          setNeededAmount(neededAmount);
        }
      } else {
        const filterValue = stocks.find((v) => v.id === id);
        console.log(filterValue);
        if (filterValue) {
          setType(filterValue.type);
          setAmount(filterValue.amount);
          setNeededAmount(filterValue.neededAmount);
        }
      }
    };
    getData();
  }, [mountNumber, id, stocks]);

  return (
    <div className="full">
      <InputComponent value={type} setValue={setType} name="Type" />
      <InputComponent value={amount} setValue={setAmount} name="Amount" />
      <InputComponent
        value={neededAmount}
        setValue={setNeededAmount}
        name="Need Amount"
      />

      {id && id === "new-stock" ? (
        <div>
          <ButtonCreateGroupComponent
            url="/blood-bank/add-stock"
            action={bloodStockActions}
            backRoute="/blood/stocks"
            data={{ type, amount, neededAmount }}
          />
        </div>
      ) : (
        <div>
          <ButtonUpdateGroupComponent
            updateUrl="/blood-bank/update-stock"
            deleteUrl="/blood-bank/delete-stock"
            action={bloodStockActions}
            backRoute="/blood/stocks"
            id={id}
            data={{ type, amount, neededAmount }}
          />
        </div>
      )}
    </div>
  );
};

export default SpecificStock;
