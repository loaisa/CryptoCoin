import React, {useState} from 'react';
import { Input } from 'antd';

interface PropsSearchCrypto{
    onSearch:(query:string) => void
}

const SearchCrypto:React.FC<PropsSearchCrypto> = ({onSearch}) => {

    const [searchQuery, setSearchQuery] = useState<string>('')
    const handleSearch=()=>{
        onSearch(searchQuery)
    }

    return (
        <Input.Search
            placeholder="Search by crypto..."
            style={{width:'30vw'}}
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onSearch={handleSearch}
        />
    );
};

export default SearchCrypto;