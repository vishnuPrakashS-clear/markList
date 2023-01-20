import { React } from 'react';
import addFields from '../services/studentManager';
import TableHeader from './TableHeader';
import TableData from './TableData';
import TextBox from './TextBox';

const headings = [
	'Name',
	'RollNo',
	'tamil',
	'english',
	'science',
	'maths',
	'social',
	'total',
	'result',
	'rank',
];

const MarkSheet = (context) => {
	const { state: { currMarkSheet }} = context;

	return <div>
		<table className="titleStyle">
			<thead>
				<tr>
					{headings.map(TableHeader)}
				</tr>
			</thead>
			<tbody>
				{addFields(currMarkSheet).map(TableData)}
			</tbody>
			<TextBox { ...context }/>
		</table>
	</div>;
};

export default MarkSheet;
