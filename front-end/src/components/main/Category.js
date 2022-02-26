import { Box,Paper,TableContainer,TableCell,
    Table,TableBody,TableRow,Button } from '@mui/material';
import {useQuery,gql} from "@apollo/client";

function createData(name, number) {
        return { name, number };
    }

const CATEGORY= gql`{
    getAllCategory{
      label
    }
  }
  `;

function Category() {
    let rows=[]
    const { loading, error, data } = useQuery(CATEGORY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if(data){ data.getAllCategory.map((label,i)=>{
        rows.push(createData(label.label,i))
    })
    }
    
      const styleTheme= {
        buttonColor:{
            backgroundColor: "#FFFFFF",
            color:'black',
        },
    };

  return (
    <Box >
        <Button fullWidth sx={ { borderRadius: 0 } }
            style={styleTheme.buttonColor}
            variant="contained" size="large" >Categories</Button>
        <TableContainer component={Paper} sx={{mt:2}}>
            <Table >
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name} width="30%">
                        <TableCell width="70%" component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell width="70%" align="right">{row.number}</TableCell>
                    </TableRow>))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default Category