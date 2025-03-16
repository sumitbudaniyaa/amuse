import "./dashboard.css";
import { ScanQrCode } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nostrum
        beatae itaque numquam ratione repudiandae, quibusdam incidunt eligendi,
        eveniet culpa, neque esse iusto atque rerum consequuntur. Vitae magnam
        iusto, non eaque cum aliquid omnis iste odit odio eveniet sint ut sed
        nihil cumque iure doloremque doloribus ducimus officia ad temporibus? Ab
        odit, maiores laborum veniam est animi doloremque modi non neque nam
        voluptatum voluptates incidunt recusandae consectetur reiciendis magni,
        officiis atque sunt quas minus! Ad doloremque vero rerum beatae esse
        dolorum maxime assumenda molestias cupiditate, itaque error facilis
        accusantium tempora suscipit pariatur voluptates delectus perferendis.
        Accusantium, amet voluptas labore magni maiores aspernatur rerum
        architecto fuga iusto repudiandae, facere unde et enim harum tenetur
        recusandae, minima cum molestias error quisquam. Velit, natus illo
        possimus quo maiores porro libero cum molestias dolores fugiat sit dolor
        exercitationem magnam qui ex ea, mollitia, maxime repudiandae? Magni,
        iste ea voluptate debitis facilis, iure vel molestias quaerat officia
        sit reiciendis tenetur sapiente. Maiores, atque perspiciatis. Doloremque
        eligendi dolores modi soluta, vel rem blanditiis iste dolorum aperiam
        voluptatem, commodi, voluptates ipsum molestiae consectetur illo
        recusandae? Voluptatum minus nesciunt autem culpa, laborum temporibus
        modi rerum repudiandae amet, architecto sit vitae molestias unde
        incidunt. Temporibus veniam labore aspernatur earum error? Fugiat minima
        recusandae illum doloremque. Modi dolorem iste cumque est saepe autem
        tenetur voluptatibus optio, quisquam temporibus perspiciatis fugit
        asperiores eaque, unde ipsum architecto doloremque, repudiandae maxime!
        Rem excepturi omnis aspernatur pariatur voluptatibus aperiam commodi
        repudiandae blanditiis fugit porro vero vel, nostrum quod. Quae minima
        repellendus odio vero, amet in nobis itaque aliquam delectus omnis unde
        debitis voluptates totam molestiae, suscipit blanditiis dolor hic
        necessitatibus. Earum iusto architecto placeat cupiditate in! Itaque,
        eveniet? Assumenda dolores exercitationem quod tempore obcaecati,
        consequuntur odio id porro. Necessitatibus possimus, perspiciatis beatae
        cupiditate quo ad soluta. Accusamus dolor quibusdam mollitia repellat
        cumque repellendus eum quidem nemo in sed amet quo tempore reiciendis
        pariatur nostrum perferendis unde vel nam repudiandae inventore
        expedita, sint quas harum? Inventore est optio autem numquam nostrum
        omnis culpa minus praesentium debitis quidem impedit, qui quod cumque
        nam, ullam eos quasi vel quis libero commodi perspiciatis iure veniam.
        Reiciendis quis expedita tempora maiores eos qui fugit, laudantium
        mollitia modi sit beatae eius ea magnam molestiae quibusdam dolores vero
        repellat aliquid sint. Obcaecati soluta blanditiis aspernatur odit
        deleniti! Placeat, distinctio fugit. Veritatis deleniti ratione in
        exercitationem ut quos beatae possimus officiis necessitatibus
        dignissimos perspiciatis sunt, iure saepe inventore labore natus neque
        cum sapiente vero excepturi tempora enim nisi provident odit. At,
        laborum. Mollitia est ad deserunt dolor quas aut ullam. Sed aspernatur
        aut hic eveniet quam sunt. Error praesentium assumenda ea molestias
        aspernatur, magni cupiditate adipisci quasi similique vero
        necessitatibus molestiae illum excepturi est nam fugiat! Autem sit
        repellat dignissimos ab molestiae alias praesentium eos, recusandae enim
        doloremque, blanditiis, doloribus nisi quo voluptate quibusdam
        accusantium ipsam laborum soluta ullam quod adipisci sapiente similique
        optio modi. Nobis eaque temporibus fuga amet libero quo, dolorum fugit
        cum, doloremque iure ipsa minima doloribus repudiandae? Enim mollitia
        earum cumque nobis animi sint impedit. Doloribus, vel unde.
      </h1>

      <div className="nav">
        <button>Create Event</button>
        <button id="qr-scan">
        <ScanQrCode color="white" size={28}/>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
