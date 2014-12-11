        public ActionResult Create(string subject, string content)
        {
            Dictionary<string, string> jo = new Dictionary<string, string>();

            if (string.IsNullOrWhiteSpace(subject))
            {
                jo.Add("Msg", "沒有輸入標題");
                return Content("{\"Msg\":\"沒有輸入標題\"}","application/json");
            }
            if (string.IsNullOrWhiteSpace(content))
            {
                jo.Add("Msg", "沒有輸入內容");
                return Content("{\"Msg\":\"沒有輸入內容\"}", "application/json");
            }
            try
            {
                jo.Add("Content",Sanitizer.GetSafeHtmlFragment(content));
                jo.Add("Result", "Success");
            }
            catch (Exception ex)
            {
                jo.Add("Result", "Failure");
                jo.Add("ResultMessage", ex.Message);
            }

            return Content("{\"Result\":\"Success\"}", "application/json");
        }
