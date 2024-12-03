import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import javax.xml.parsers.*;
import javax.xml.transform.dom.DOMSource;
import javax.xml.validation.*;
import org.w3c.dom.*;
import org.xml.sax.SAXException;

@WebServlet("/ProductServlet")
public class ProductServlet extends HttpServlet {

    // Paths to XML and XSD files
    private static final String XML_FILE = "/WEB-INF/products.xml";
    private static final String XSD_FILE = "/WEB-INF/products.xsd";

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Load the XML file
        InputStream xmlInput = getServletContext().getResourceAsStream(XML_FILE);
        InputStream xsdInput = getServletContext().getResourceAsStream(XSD_FILE);

        if (xmlInput == null || xsdInput == null) {
            out.println("<h1>Error: XML or XSD file not found.</h1>");
            return;
        }

        try {
            // Validate the XML against the XSD
            if (!validateXML(xmlInput, xsdInput)) {
                out.println("<h1>Error: XML does not conform to the schema.</h1>");
                return;
            }

            // Parse the XML and extract product details
            xmlInput = getServletContext().getResourceAsStream(XML_FILE); // Reload XML after validation
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document doc = builder.parse(xmlInput);

            // Generate HTML response
            out.println("<h1>Product List</h1
