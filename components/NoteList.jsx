import { FlatList } from 'react-native';
import NoteItem from '../components/NoteItem';

const NoteList = ({ notes, onDelete, onEdit }) => {
    
  return (
    <FlatList 
      data={notes}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <NoteItem note={item} onDelete={onDelete} onEdit={onEdit} />}
    />
  )
}

export default NoteList;