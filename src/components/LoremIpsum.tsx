import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
   margin: 24px 0;
`;

const LoremIpsum: React.FC<{ paragraphs?: number }> = ({ paragraphs = 20 }) => (
   <div style={{ margin: '24px 0' }}>
      {Lipsum.slice(0, paragraphs).map((parag) =>
         (<Paragraph>{parag}</Paragraph>)
      )}
   </div>
);

export default LoremIpsum;

export const Lipsum = [
   `
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat finibus erat eu porttitor. Vivamus imperdiet sodales sem vitae ultricies. Mauris quis molestie diam. Cras fermentum metus sit amet condimentum eleifend. Fusce hendrerit et mi a hendrerit. Sed magna nisi, ullamcorper in tellus ac, lobortis pretium ex. Mauris malesuada orci et est cursus, sit amet lacinia elit consectetur. Duis pharetra dapibus sodales. Mauris nec dolor eros. Donec a magna at sem mattis laoreet. Quisque sodales turpis et ipsum efficitur aliquet. Vestibulum tempor cursus vestibulum. Vivamus sit amet vehicula elit, in elementum ante.
`,
   `
         Vivamus mattis elit at dui commodo, ut ornare nisi molestie. Nulla volutpat sapien id leo pellentesque, vitae dignissim eros mollis. Phasellus imperdiet massa quis massa varius tincidunt. Phasellus eget lacinia nunc, eu accumsan magna. Nam ullamcorper orci arcu, id feugiat purus varius rhoncus. Maecenas erat ipsum, vulputate vitae dolor vel, pellentesque mattis tellus. Integer ut dolor blandit, dictum ligula eu, commodo nibh. Pellentesque urna neque, accumsan at ligula tincidunt, tristique auctor justo. Nullam pharetra vehicula arcu, ut porttitor ex rutrum maximus. Praesent vitae ipsum iaculis, tristique ex at, aliquet elit.
`,
   `
         Aenean in vehicula justo, id convallis erat. Morbi scelerisque porttitor nulla, id rhoncus lectus bibendum sed. Maecenas sapien urna, aliquet eu pretium eget, luctus sed orci. Quisque posuere viverra feugiat. Curabitur lacinia odio in dui accumsan elementum. Vivamus tristique interdum imperdiet. In quis accumsan purus. Nam pellentesque, est eget cursus faucibus, nisl lorem viverra sapien, eget vehicula sem diam ut nisi. Pellentesque blandit in velit nec pharetra. Mauris metus nulla, vestibulum molestie laoreet vel, hendrerit ac nunc. Maecenas mollis blandit euismod. Mauris vehicula eros diam, sit amet iaculis sapien varius quis.
`,
   `
         In hac habitasse platea dictumst. Vivamus vitae commodo tellus. Aliquam erat volutpat. Vestibulum vestibulum pharetra semper. Sed magna nunc, efficitur ut fermentum sed, sollicitudin sed velit. Pellentesque bibendum pharetra metus, vel iaculis libero luctus at. Suspendisse vel lorem orci.
`,
   `
         Integer placerat molestie dolor, ornare tincidunt ligula rhoncus vel. Nam turpis turpis, ultricies id felis sed, sodales lacinia eros. Sed pellentesque sodales blandit. Etiam dictum eros lectus, eu pharetra quam sollicitudin at. Donec at sem non eros porta finibus euismod non neque. Curabitur rhoncus leo eu accumsan commodo. Duis volutpat orci purus, non volutpat metus porta id. Cras ornare lacus vel nisl interdum accumsan. Phasellus faucibus, lectus ut scelerisque condimentum, ligula ligula suscipit sapien, vel pellentesque nisi mi pretium odio. Etiam at lectus id risus laoreet luctus ut eget est. Vestibulum eros odio, vehicula at elementum vitae, sollicitudin a tellus. Nulla euismod pulvinar semper. Integer ipsum diam, aliquam sit amet tellus ac, tincidunt suscipit nisl. Cras vulputate lobortis lorem ut ultrices.
`,
   `
         Sed tempor auctor volutpat. Donec sed vehicula ipsum. Etiam maximus auctor neque vel venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas accumsan, nisl id dapibus tincidunt, erat sapien elementum mi, scelerisque cursus lectus dui vel leo. Aliquam iaculis placerat sapien, nec facilisis sem auctor vitae. Donec convallis nunc id lobortis pulvinar.
`,
   `
         Praesent eu lacus et eros aliquam pharetra. Nunc auctor eros et scelerisque tempus. Aliquam quis mauris sed tortor gravida ultrices sit amet et elit. Duis et elementum dui. Proin feugiat non eros pellentesque rhoncus. Integer iaculis diam eu erat semper commodo. Integer porttitor posuere sapien interdum pulvinar. Cras nec nibh maximus, varius augue vitae, interdum ligula. Curabitur finibus risus mauris, sed vulputate nulla viverra sit amet. Suspendisse potenti. Suspendisse lobortis orci ligula, lobortis varius turpis sagittis at. Donec tempus nulla nec metus facilisis volutpat. Donec urna mauris, facilisis a ante non, commodo venenatis enim. In imperdiet purus ut eros mollis lobortis. Integer maximus tortor sit amet ante auctor finibus. Duis ultrices nibh at tincidunt venenatis.
`,
   `
         Pellentesque mattis sapien risus, gravida ullamcorper velit sodales id. Cras at sapien velit. Ut at dolor ultrices, laoreet massa at, elementum risus. Sed tempor sollicitudin felis, vitae scelerisque tellus eleifend a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut id sagittis ex. Phasellus eget aliquam enim, eu tempus risus.
`,
   `
         In commodo arcu ac orci suscipit vehicula. Fusce vestibulum dolor ut lacus pulvinar lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id mollis dui. Nulla facilisi. Praesent iaculis pharetra nisl a luctus. Donec velit felis, congue ac auctor et, congue sed enim. Maecenas vitae pellentesque arcu, et mattis mi.
`,
   `
         Donec pharetra mauris vitae mauris commodo pretium. Pellentesque sit amet mi nibh. Nam finibus ex in ipsum venenatis fringilla in id enim. Nullam et dignissim velit. Praesent id dapibus orci, eget auctor ligula. Phasellus mollis vehicula nulla, in maximus nulla convallis in. Phasellus at volutpat nisi, bibendum malesuada ligula.
`,
   `
         Donec cursus nec elit quis vulputate. Sed id fringilla elit, ac cursus urna. In hac habitasse platea dictumst. Nam gravida diam id accumsan feugiat. Suspendisse dolor diam, euismod et tincidunt sit amet, posuere quis odio. Ut sit amet erat sit amet tortor consectetur fringilla. Etiam vel nulla iaculis ex suscipit suscipit eget congue lacus. Pellentesque tristique sit amet ex in lobortis. Maecenas dictum ex egestas quam fermentum, eu lobortis enim lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque aliquam risus eu viverra fringilla. Nullam nec iaculis mi, sit amet iaculis purus. Nulla leo justo, tempus eu nibh non, vestibulum imperdiet lacus. Nullam aliquet lectus quis ex malesuada sodales.
`,
   `
         Maecenas pellentesque malesuada maximus. Nullam mollis a orci interdum fringilla. Maecenas lectus tellus, rutrum ac metus sed, porta bibendum massa. Mauris rutrum est sit amet eros sollicitudin mattis. Phasellus consectetur nisl metus, vitae porttitor lacus aliquet vitae. Maecenas eget nulla ac nunc elementum luctus. Praesent mollis vestibulum nulla at facilisis. Quisque eleifend, dolor a sollicitudin condimentum, felis nibh volutpat felis, a varius augue nunc eget erat. Aliquam et molestie sem, id eleifend mi. Mauris tincidunt ultrices nisl, fermentum pellentesque purus lobortis at. Donec a mauris nec tortor ornare maximus quis in urna. Ut tempor id tellus eu sollicitudin. Nullam aliquam, diam non venenatis aliquam, odio massa rutrum nibh, blandit malesuada eros sem id enim.
`,
   `
         Nunc diam ligula, vehicula vitae nunc in, porta posuere turpis. Donec facilisis congue ultrices. Maecenas fermentum magna id ullamcorper fermentum. Sed at eros quis est euismod venenatis. Praesent finibus et lacus non ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aliquam bibendum nec orci congue gravida. Sed eu enim eros. Curabitur nec orci accumsan, pulvinar ante at, fringilla nibh. Nunc fringilla et risus ut efficitur. In efficitur hendrerit mauris, a vehicula orci dignissim ac. Ut hendrerit enim et congue dapibus. Nulla sollicitudin risus ac urna mattis convallis. Praesent finibus tempor magna, at posuere augue. Aliquam erat volutpat.
`,
   `
         Nulla quis sodales velit. Curabitur sed sodales tellus. Cras nec finibus augue, eu dictum lectus. Sed consequat sapien felis, non fringilla lorem commodo sit amet. Nullam id erat nibh. Praesent in pellentesque erat. Vestibulum vel nunc maximus, vulputate sem ut, sagittis turpis.
`,
   `
         In hac habitasse platea dictumst. Quisque vel augue odio. Integer vulputate augue nulla, sit amet dapibus lorem bibendum in. Aenean sit amet tristique diam, at vulputate massa. Duis diam leo, maximus eu fermentum id, venenatis eget lorem. Nunc sit amet fermentum justo, ac fermentum tellus. In accumsan tellus a magna sodales maximus vel sit amet nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris elementum scelerisque felis, quis iaculis augue imperdiet non. Maecenas eu leo suscipit, cursus massa quis, faucibus massa. Nam id enim imperdiet, bibendum nisi vel, vulputate libero.
`,
   `
         Morbi dapibus iaculis libero eget volutpat. Curabitur ultricies lacinia sagittis. Maecenas blandit sed nisl ac semper. Nunc at urna in ante placerat malesuada. Nulla quis lacus massa. Cras fringilla porttitor tellus, eget ornare felis. Donec sed dignissim mi. Nunc a tellus lorem. Suspendisse interdum, diam vitae mollis laoreet, metus dui congue nunc, et dictum lectus nisi sit amet justo.
`,
   `
         Morbi quis lorem placerat, consectetur quam non, vestibulum massa. Duis volutpat, risus vel posuere iaculis, libero purus gravida elit, ut iaculis mi nisi vel erat. Etiam rhoncus nulla et porta aliquam. Sed quis tellus diam. Nullam pretium ex massa, at pellentesque purus rutrum eu. Phasellus dictum magna at est scelerisque, eget maximus nibh rutrum. Duis pellentesque erat odio, vel consectetur purus egestas in. Phasellus auctor mattis sem interdum mattis. Nullam nisi nisi, efficitur at quam ac, efficitur mattis est. In ullamcorper mauris ut est ultrices, a maximus neque varius. Ut accumsan quam at neque tempor pulvinar. Proin erat est, iaculis id felis vitae, eleifend placerat ante. Praesent vel placerat velit. Aliquam scelerisque malesuada lacinia.
`,
   `
         Quisque dapibus sem tincidunt, ultricies est eget, placerat augue. Aenean a turpis a mauris condimentum iaculis. Integer aliquam fermentum ex et molestie. Cras in laoreet ipsum, at eleifend enim. Sed tincidunt risus at venenatis tempor. Aenean et dolor dui. Etiam tincidunt nibh vitae risus viverra venenatis. Maecenas aliquam augue congue lectus tincidunt luctus.
`,
   `
         Sed a dui ex. Vestibulum a ultricies felis. Quisque vel nibh tristique, scelerisque est a, pulvinar nisl. Nulla imperdiet ante erat, nec sollicitudin purus imperdiet sit amet. Vestibulum dignissim augue quam, non aliquet mauris blandit at. Vivamus tincidunt sem euismod enim sagittis, et consequat nisl vulputate. Phasellus bibendum at nibh ut maximus. Maecenas semper leo ut nulla maximus, vitae finibus turpis tincidunt. Donec fermentum accumsan tortor nec efficitur. In placerat mi quis diam feugiat, et iaculis turpis ullamcorper. Nunc id dui in eros dapibus tempus. Praesent eleifend placerat elit, quis semper nunc auctor nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque eget purus eu odio convallis condimentum ut eget nunc. Nullam molestie leo eu molestie ultricies.
`,
   `
         Nullam pellentesque tristique varius. Morbi eget dolor tortor. Quisque porttitor mollis sagittis. Ut tempus, dolor eget vehicula facilisis, ante mauris feugiat leo, id egestas nisl tellus nec tortor. In eget tortor nunc. Sed laoreet tellus erat. Ut a aliquam lacus. Duis iaculis id tortor a interdum.
`,
];
