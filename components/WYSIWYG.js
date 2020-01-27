import Avatar from 'avataaars'

 export default ({ topType, accessoriesType, facialHairType, clotheType, clotheColor, eyeType, eyebrowType, mouthType, skinColor, hairColor }) => (
   <div className="wrapper">
       <Avatar
         avatarStyle='Circle'
         topType={topType}
         hairColor={hairColor}
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
      }
    `}</style>
   </div>
 )
