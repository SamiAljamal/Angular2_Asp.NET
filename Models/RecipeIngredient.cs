using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2demoyeoman.Models
{
    [Table("RecipeIngredients")]
    public class RecipeIngredient
    {
        [Key]
        public int RecipeIngredientId { get; set; }

        [ForeignKey("Recipe")]
        public int RecipeId { get; set; }
        public virtual Recipe Recipe { get; set;}

        [ForeignKey("Ingredient")]
        public int IngredientId { get; set; }
        public virtual Ingredient Ingredient { get; set; }

    }
}
