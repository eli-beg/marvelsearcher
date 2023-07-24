import { Subtext } from "../../styles/theme";

const SecondaryText = (props) => {
  const { comicData } = props;

  return (
    <>
      {comicData
        ? Object.entries(comicData).map(([key, value]) =>
            value ? (
              <Subtext key={key}>
                {key}: {value}
              </Subtext>
            ) : null
          )
        : null}
    </>
  );
};

export default SecondaryText;
