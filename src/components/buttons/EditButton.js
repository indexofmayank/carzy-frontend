import { EditOutlined } from '@ant-design/icons';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function EditButton() {

    return (
        <Tooltip title="Edit">
            <IconButton>
                <EditOutlined />
            </IconButton>

        </Tooltip>

    );

};