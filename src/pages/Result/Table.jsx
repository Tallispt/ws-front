import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const TableComponent = ({ tableValues }) => {
  return (
    <TableContainer>
      <Table size={"sm"}>
        <Thead>
          <Tr>
            {Object.keys(tableValues[0]).map((item, index) => (
              <Th key={index}>{item}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableValues.map((item, index) => (
            <Tr key={index}>
              {Object.keys(item).map((itemi, indexi) => (
                <Td key={indexi}>{item[itemi]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
