import React from 'react';
import {PropTypes} from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const RecordTable = ({people}) => {
  return (
    <Paper className="width">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-header">Name</TableCell>
            <TableCell className="table-header">Date of Birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {Object.keys(people).map((item, i) => (
                <TableRow>
                  <TableCell key={i+100}>{people[item].name}</TableCell>
                  <TableCell key={i}>{people[item].dob}</TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default RecordTable;
