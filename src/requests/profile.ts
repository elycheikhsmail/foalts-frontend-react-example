import axios from 'axios';

export async function updateProfile(username: string, avatar: File|null): Promise<void> {
  const formData = new FormData();
  formData.set('name', username);
  if (avatar) {
    formData.set('avatar', avatar);
  }

  await axios.post('/api/profile', formData, {
    headers: {
    'content-type': 'multipart/form-data'
    }
  });
}