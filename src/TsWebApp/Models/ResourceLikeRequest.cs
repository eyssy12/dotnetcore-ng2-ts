namespace TsWebApp.Models
{
    public class ResourceLikeRequest
    {
        public int Requester { get; set; }

        public int ResourceId { get; set; }

        public string Context { get; set; }
    }
}