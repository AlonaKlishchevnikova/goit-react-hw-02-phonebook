import MyPhonebook from "modules/MyPhonebook/MyPhonebook";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <MyPhonebook />
    </div>
  );
};
