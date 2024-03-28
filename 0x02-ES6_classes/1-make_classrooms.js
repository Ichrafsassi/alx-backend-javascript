import ClassRoom from './0-classroom';

function initializeRooms() {
  // Create an array to hold the ClassRoom instances
  const rooms = [];

  // Create three ClassRoom instances with sizes 19, 20, and 34
  rooms.push(new ClassRoom(19));
  rooms.push(new ClassRoom(20));
  rooms.push(new ClassRoom(34));

  // Return the array of ClassRoom instances
  return rooms;
}

export default initializeRooms;
