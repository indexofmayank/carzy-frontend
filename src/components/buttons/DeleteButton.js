import {DeleteOutlined} from '@ant-design/icons';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function DeleteButton() {

    return (
        <Tooltip title="Delete">
            <IconButton>
                <DeleteOutlined />
            </IconButton>
        </Tooltip>
        
    )

}