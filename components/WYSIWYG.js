import Avatar from 'avataaars'

 export default ({ avatarStyle, topType, accessoriesType, facialHairType, clotheType, clotheColor, eyeType, eyebrowType, mouthType, skinColor }) => (
   <div className="wrapper">
       <Avatar
         avatarStyle={avatarStyle}
         topType={topType}
         accessoriesType={accessoriesType}
         facialHairType={facialHairType}
         clotheType={clotheType}
         clotheColor={clotheColor}
         eyeType={eyeType}
         eyebrowType={eyebrowType}
         mouthType={mouthType}
         skinColor={skinColor}
       />
    <style jsx>{`
      .wrapper {
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: center;
      }
    `}</style>
   </div>
 )
