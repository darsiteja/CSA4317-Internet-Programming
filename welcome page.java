
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/WelcomeServlet")
public class WelcomeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    private void processRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String name = request.getParameter("name");

        response.setContentType("text/html");

        response.getWriter().println("<!DOCTYPE html>");
        response.getWriter().println("<html>");
        response.getWriter().println("<head>");
        response.getWriter().println("<title>Welcome Page</title>");
        response.getWriter().println("</head>");
        response.getWriter().println("<body>");
        if (name != null && !name.trim().isEmpty()) {
            response.getWriter().println("<h1>Welcome, " + name + "!</h1>");
        } else {
            response.getWriter().println("<h1>Welcome, Guest!</h1>");
        }
        response.getWriter().println("</body>");
        response.getWriter().println("</html>");
    }
}
