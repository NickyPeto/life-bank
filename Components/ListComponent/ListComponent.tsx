import { FlatList, View, Text } from "react-native";

import ListItem from "./ListItem";
import { typographyStylesheet } from "../../Stylesheets/Typography";
import { ListComponentStylesheet } from "../../Stylesheets/ListComponentStylesheet";

//TODO: This will come from either mock bank api or my own api
export const data = [
  {
    id: 1,
    title: "YPF",
    amount: "250.00",
    description: "Fuel",
    date: "10/12/2022",
  },
  {
    id: 2,
    title: "Mc Donalds",
    amount: "550.00",
    description: "Quarter Pounder",
    date: "20/12/2022",
  },
  {
    id: 3,
    title: "Coop",
    amount: "1320.00",
    description: "Grocery Shopping",
    date: "03/01/2023",
  },
  {
    id: 4,
    title: "Clas Ohlson",
    amount: "21.00",
    description: "Screws",
    date: "06/01/2023",
  },
  {
    id: 5,
    title: "ICA",
    amount: "350.00",
    description: "Grocery",
    date: "02/01/2023",
  },
  {
    id: 6,
    title: "Todo Moda",
    amount: "246.00",
    description: "Make up",
    date: "04/02/2023",
  },
  {
    id: 7,
    title: "Lucianoss",
    amount: "2000.50",
    description: "Ice cream",
    date: "21/03/2023",
  },
  {
    id: 8,
    title: "Starbucks Ezeiza",
    amount: "1500.00",
    description: "Iced coffee and bagels",
    date: "04/04/2023",
  },
  {
    id: 9,
    title: "Todo Moda",
    amount: "246.00",
    description: "Make up",
    date: "04/02/2023",
  },
  {
    id: 10,
    title: "Lucianoss",
    amount: "2000.50",
    description: "Ice cream",
    date: "21/03/2023",
  },
  {
    id: 11,
    title: "Starbucks Ezeiza",
    amount: "1500.00",
    description: "Iced coffee and bagels",
    date: "04/04/2023",
  },
  {
    id: 12,
    title: "Todo Moda",
    amount: "246.00",
    description: "Make up",
    date: "04/02/2023",
  },
  {
    id: 13,
    title: "Lucianoss",
    amount: "2000.50",
    description: "Ice cream",
    date: "21/03/2023",
  },
  {
    id: 14,
    title: "Starbucks Ezeiza",
    amount: "1500.00",
    description: "Iced coffee and bagels",
    date: "04/04/2023",
  },
];

//TODO: type this props explicitly
const ListComponent: React.FC<any> = (props) => {
  return (
    <View style={ListComponentStylesheet.listComponent}>
      <View style={ListComponentStylesheet.listComponentWrapper}>
        {props.hasHeader ? (
          <>
            <Text style={typographyStylesheet.typographyBold}>
              {props.header}
            </Text>
          </>
        ) : null}
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{ backgroundColor: "transparent" }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <ListItem {...item} />}
      />
    </View>
  );
};

export default ListComponent;
