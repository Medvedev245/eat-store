import {
  ContainerContact,
  TextElement,
  TitleElement,
  ElementList,
  Element,
} from "./Contacts.styled";
import FormDialog from "../../components/SendMail/FormDialog.jsx";
import MyComponent from "../../components/CallCenter/CallCenter.jsx";
const Contacts = () => {
  return (
    <>
      <ContainerContact>
        <div>
          <TitleElement>Kontaktujte náš přátelský tým podpory.</TitleElement>
          <TextElement>
            Naše pracovní doba 9:00 - 18:00. pondělí - pátek
          </TextElement>
        </div>
        <ElementList>
          <Element>
            <h3>E-mailová podpora</h3>
            <p>
              Dáváte přednost emailu? Pošlete nám e-mail a my se vám ozveme zpět
              brzy.
            </p>
            <FormDialog />
          </Element>
          <Element>
            <h3>Call centrum</h3>
            <p>
              Naše call centrum je otevřené 24/7, čeká na vás přes 150
              zaměstnanců volání.
            </p>
            <MyComponent />
          </Element>
        </ElementList>
      </ContainerContact>
    </>
  );
};

export default Contacts;
