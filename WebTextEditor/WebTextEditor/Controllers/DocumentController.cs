//using Microsoft.AspNetCore.Mvc;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web.Mvc;
//using WebTextEditor.Models;
//using ActionResult = Microsoft.AspNetCore.Mvc.ActionResult;

//namespace WebTextEditor.Controllers
//{
//    public class DocumentController
//    {
//        // Temporary in-memory document list
//        private static List<Document> _documents = new List<Document>
//    {
//        new Document { Id = 1, Title = "Document 1", Content = "This is the first document." },
//        new Document { Id = 2, Title = "Document 2", Content = "This is another document." },
//        new Document { Id = 3, Title = "Project Notes", Content = "Some project notes..." }
//    };

//        // GET: Docs
//        public ActionResult Index()
//        {
//            // Pass the list of documents to the view
//            return View(_documents);
//        }

//        // Optional: for AJAX document loading
//        public JsonResult GetDocument(int id)
//        {
//            var doc = _documents.FirstOrDefault(d => d.Id == id);
//            return Json(doc, JsonRequestBehavior.AllowGet);
//        }
//    }
//}
