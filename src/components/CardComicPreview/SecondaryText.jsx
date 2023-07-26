import { CustomizedSubtext } from "./styled";

const SecondaryText = (props) => {
  const { comicData } = props;

  return (
    <>
      {comicData
        ? Object.entries(comicData).map(([key, value]) =>
            value ? (
              <CustomizedSubtext key={key}>
                {key}: {value}
              </CustomizedSubtext>
            ) : null
          )
        : null}
    </>
  );
};

export default SecondaryText;
