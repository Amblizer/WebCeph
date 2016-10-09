import React from 'react';
import Dialog from 'material-ui/Dialog';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { pure } from 'recompose';
import { hasResultValue as isViewableResultWithValue } from '../../analyses/helpers'; 

interface AnalysisResultsViewerProps {
  onCloseRequested: () => any;
  open: boolean;
  results: ViewableAnalysisResult[];
}

export const AnalysisResultsViewer = pure(({ open, onCloseRequested, results }: AnalysisResultsViewerProps) => (
  <Dialog open={open} onRequestClose={onCloseRequested} >
  <Table>
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>
          Result
        </TableHeaderColumn>
        <TableHeaderColumn>
          Value
        </TableHeaderColumn>
        <TableHeaderColumn>
          Severity
        </TableHeaderColumn>
        <TableHeaderColumn>
          Calculated
        </TableHeaderColumn>
        <TableHeaderColumn>
          Norm
        </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    {
      results.map((result, i) => (
        <TableRow key={i}>
          <TableRowColumn>
            {result.name}
          </TableRowColumn>
          <TableRowColumn>
            {result.indicates}
          </TableRowColumn>
          <TableRowColumn>
            {result.severity}
          </TableRowColumn>
          <TableRowColumn>{
            isViewableResultWithValue(result) ? (
              result.relevantComponents.map(r => (
                <div key={r.symbol}>{r.symbol} = {r.value.toFixed(1)}</div>
              ))
            ) : '-'
        }</TableRowColumn>
        <TableRowColumn>{
            isViewableResultWithValue(result) ? (
              result.relevantComponents.map(r => (
                <div key={r.symbol}>{r.norm}{r.stdDev ? `±${r.stdDev.toFixed(0)}` : ''}</div>
              ))
            ) : '-'
        }</TableRowColumn>
        </TableRow>
      ))
    }
    </TableBody>
  </Table>
  </Dialog>
));

export default AnalysisResultsViewer;